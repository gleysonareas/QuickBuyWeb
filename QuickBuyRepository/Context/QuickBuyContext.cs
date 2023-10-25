using Microsoft.EntityFrameworkCore;
using QuickBuyDomain.Entity;
using QuickBuyDomain.ValueObject;
using QuickBuyRepository.Config;

namespace QuickBuyRepository.Context
{
    public class QuickBuyContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Requestt> Requestts { get; set; }
        public DbSet<ItemRequest> ItensRequest { get; set; }
        public DbSet<Payment> Payment { get; set; }

        public QuickBuyContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new RequesttConfiguration());
            modelBuilder.ApplyConfiguration(new ItemRequestConfiguration());
            modelBuilder.ApplyConfiguration(new PaymentConfiguration());

            modelBuilder.Entity<Payment>().HasData(
                new Payment()
                {
                    Id = 1,
                    Name = "Ticket",
                    Description = "Forma de pagamento boleto"
                },
                 new Payment()
                 {
                     Id = 2,
                     Name = "CreditCard",
                     Description = "Forma de pagamento cartão de crédito"
                 },
                  new Payment()
                  {
                      Id = 3,
                      Name = "Deposit",
                      Description = "Forma de pagamento depósito"
                  }
            );

            base.OnModelCreating(modelBuilder);
        }
    }
}
