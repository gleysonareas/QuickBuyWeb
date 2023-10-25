using QuickBuyDomain.Contract;
using QuickBuyDomain.Entity;
using QuickBuyRepository.Context;

namespace QuickBuyRepository.Repository
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }
    }
}
