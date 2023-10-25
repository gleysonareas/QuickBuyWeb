namespace QuickBuyDomain.Entity
{
    public class ItemRequest : Entity
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }

        protected override void Validate()
        {
            if (ProductId == 0)
            {
                AddMessage("Não foi identificado qual a referencia do produto!");
            }
            if (Quantity == 0)
            {
                AddMessage("Quantidade não foi informada!");
            }
        }
    }
}
