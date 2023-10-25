using QuickBuyDomain.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuyDomain.ValueObject
{
    public class Payment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public bool IsTicket
        {
            get { return Id == (int)TypePaymentEnum.Ticket; }
        }

        public bool IsCreditCard
        {
            get { return Id == (int)TypePaymentEnum.CreditCard; }
        }

        public bool IsDeposit
        {
            get { return Id == (int)TypePaymentEnum.Deposit; }
        }

        public bool IsUndefined
        {
            get { return Id == (int)TypePaymentEnum.Undefined; }
        }


    }
}
