using QuickBuyDomain.Contract;
using QuickBuyDomain.Entity;
using QuickBuyRepository.Context;

namespace QuickBuyRepository.Repository
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }
    }
}
