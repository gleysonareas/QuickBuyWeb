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

        public string GetMessageValidation()
        {
            return string.Join(". ", validationMessage);
        }

        public abstract void Validate();

        public bool IsValid
        {
            get { return !validationMessage.Any(); }
        }

        protected void ClearValidateMessages()
        {
            validationMessage.Clear();
        }

    }
}
