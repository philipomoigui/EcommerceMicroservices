using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using Npgsql;

namespace Discount.API.Extensions
{
    public static class HostExtensions
    {
        public static IHost MigrateDataBase<Tcontext>(this IHost host, int? retry  = 0)
        {
            var retryForAvailability = retry.Value;

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var configuration = services.GetRequiredService<IConfiguration>();
                var logger = services.GetRequiredService<ILogger<Tcontext>>();

                try
                {
                    logger.LogInformation("Migrating postgresSql database");

                    var connection = new NpgsqlConnection(configuration.GetValue<string>("DatabaseSettings:ConnectionString"));

                    connection.Open();

                    using var command = new NpgsqlCommand
                    {
                        Connection = connection
                    };

                    command.CommandText = "DROP TABLE IF EXISTS Coupon";
                    command.ExecuteNonQuery();

                    command.CommandText = @"CREATE TABLE Coupon (Id SERIAL PRIMARY KEY,
                                            ProductName VARCHAR(24) NOT NULL,
                                            Description TEXT,
                                            Amount INT)";
                    command.ExecuteNonQuery();


                    command.CommandText = "INSERT INTO Coupon(ProductName, Description, Amount) Values ('IPhone X', 'IPhone for all', 240)";
                    command.ExecuteNonQuery();

                    command.CommandText = "INSERT INTO Coupon(ProductName, Description, Amount) Values ('Samsung S10', 'Phone of the decade', 180)";
                    command.ExecuteNonQuery();

                    logger.LogInformation("Migrated postgresSql database");

                }
                catch (NpgsqlException ex)
                {
                    logger.LogInformation(ex, "An error occured while migrating postgresSql database");

                    if (retryForAvailability < 50)
                    {
                        retryForAvailability++;

                        System.Threading.Thread.Sleep(2000);
                        MigrateDataBase<Tcontext>(host, retryForAvailability);
                    }
                }

                return host;
            }
        }
    }
}
