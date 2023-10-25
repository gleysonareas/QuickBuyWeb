using System;
using System.Collections.Generic;

namespace QuickBuyDomain.Contract
{
    public interface IBaseRepository<TEntity> : IDisposable where TEntity : class
    {
        void Add(TEntity entity);
        TEntity GetById(int id);
        IEnumerable<TEntity> GetAll();
        void Update(TEntity entity);
        void delete(TEntity entity);
    }
}
