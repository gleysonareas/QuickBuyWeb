using System.Collections.Generic;

namespace QuickBuyDomain.Entity
{
    public class User : Entity
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public virtual ICollection<Requestt> Requests { get; set; }

        protected override void Validate()
        {
            if (string.IsNullOrEmpty(Email))
            {
                AddMessage("Email não foi informado");
            }
            if (string.IsNullOrEmpty(Password))
            {
                AddMessage("Senha não foi informada");
            }
        }
    }
}
