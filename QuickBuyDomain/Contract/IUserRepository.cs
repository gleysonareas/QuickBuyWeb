using QuickBuyDomain.Entity;
using System.Dynamic;

namespace QuickBuyDomain.Contract
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User Get(string email, string password);
    }
}
