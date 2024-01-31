using QuickBuyDomain.Contract;
using QuickBuyDomain.Entity;
using QuickBuyRepository.Context;
using System.Linq;

namespace QuickBuyRepository.Repository
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }

        public User Get(string email, string password)
        {
            return QuickBuyContext.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
        }
    }
}
