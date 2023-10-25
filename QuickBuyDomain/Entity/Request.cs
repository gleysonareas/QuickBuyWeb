using QuickBuyDomain.ValueObject;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuyDomain.Entity
{
    public class Requestt : Entity
    {
        public int Id { get; set; }
        public DateTime DateRequest { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public DateTime DeliveryForecastDate { get; set; }
        public string ZipCode { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public int AddressNumber { get; set; }
        public int PaymentId { get; set; }
        public virtual Payment Payment { get; set; }
        public virtual ICollection<ItemRequest> ItensRequest { get; set; }

        protected override void Validate()
        {
            ClearValidateMessages();
            if (!ItensRequest.Any())
            {
                AddMessage("Aviso: Pedido não pode ficar sem intem pedido!");
            }
            if (string.IsNullOrEmpty(ZipCode))
            {
                AddMessage("Aviso: Cep deve estar preenchido!");
            }
            if (PaymentId == 0)
            {
                AddMessage("Não foiinformado a forma de pagamento");
            }
        }
    }
}
