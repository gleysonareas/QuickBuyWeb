namespace QuickBuyDomain.Entity
{
    public class Product : Entity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }

        protected override void Validate()
        {
            if (string.IsNullOrEmpty(Name))
            {
                AddMessage("Nome do produto não preenchido");
            }
        }
    }
}
