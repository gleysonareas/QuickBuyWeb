using System.Collections.Generic;
using System.Linq;

namespace QuickBuyDomain.Entity
{
    public abstract class Entity
    {
        private List<string> _validationMessagens { get; set; }
        private List<string> validationMessage
        {
            get { return _validationMessagens ?? (_validationMessagens = new List<string>()); }
        }

        protected void AddMessage(string message)
        {
            validationMessage.Add(message);
        }

        protected abstract void Validate();
        protected bool IsValid
        {
            get { return !validationMessage.Any(); }
        }

        protected void ClearValidateMessages()
        {
            validationMessage.Clear();
        }

    }
}
