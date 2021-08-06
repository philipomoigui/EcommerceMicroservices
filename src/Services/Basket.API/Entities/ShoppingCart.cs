using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Basket.API.Entities
{
    public class ShoppingCart
    {
        public string Username { get; set; }
        public List<ShoppingCartItem> ShoppingCartItems { get; set; }

        public ShoppingCart()
        {

        }

        public ShoppingCart(string username)
        {

        }

        public decimal TotalPrice
        {
            get
            {
                decimal totalprice = 0;
                foreach (var item in ShoppingCartItems)
                {
                    totalprice += item.Price * item.Quantity;
                }
                return totalprice;
            }
        }


    }
}
