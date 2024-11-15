
using QuickBuyDomain.Contract;
using QuickBuyRepository.Context;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuyRepository.Repository
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected readonly QuickBuyContext QuickBuyContext;
        public BaseRepository(QuickBuyContext quickBuyContext)
        {
            QuickBuyContext = quickBuyContext;
        }
        public void Add(TEntity entity)
        {
            QuickBuyContext.Set<TEntity>().Add(entity);
            QuickBuyContext.SaveChanges();
        }

        public void Delete(TEntity entity)
        {
            QuickBuyContext.Remove(entity);
            QuickBuyContext.SaveChanges();
        }

        public void Dispose()
        {
            QuickBuyContext.Dispose(); //Com este método é possivel descartar o objeto de contexto da memória
        }

        public IEnumerable<TEntity> GetAll()
        {
            return QuickBuyContext.Set<TEntity>().ToList();
        }

        public TEntity GetById(int id)
        {
            return QuickBuyContext.Set<TEntity>().Find(id);
        }

        public void Update(TEntity entity)
        {
            QuickBuyContext.Set<TEntity>().Update(entity);
            QuickBuyContext.SaveChanges();
        }
    }
}
