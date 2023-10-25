using QuickBuyDomain.Contract;
using QuickBuyDomain.Entity;
using QuickBuyRepository.Context;

namespace QuickBuyRepository.Repository
{
    public class RequestRepository : BaseRepository<Requestt>, IRequestRepository
    {
        public RequestRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }
    }
}
