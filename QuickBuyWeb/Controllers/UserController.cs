using Microsoft.AspNetCore.Mvc;
using QuickBuyDomain.Contract;
using QuickBuyDomain.Entity;
using System;

namespace QuickBuyWeb.Controllers
{
    [Route("api/[Controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost]
        public ActionResult Post([FromBody] User user)
        {
            try
            {
                var userAdded = _userRepository.Get(user.Email);
                if (userAdded != null)
                    return BadRequest("Usuário já cadastrado no sistema");
                //user.IsAdmin = true;
                _userRepository.Add(user);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("VerifyUser")]
        public ActionResult VerifyUser([FromBody] User user)
        {
            try
            {
                var returnUser = _userRepository.Get(user.Email, user.Password);
                if (returnUser != null)
                    return Ok(returnUser);

                return BadRequest("Usuario ou senha invalídos");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
