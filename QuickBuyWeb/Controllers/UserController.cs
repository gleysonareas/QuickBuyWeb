using Microsoft.AspNetCore.Mvc;
using QuickBuyDomain.Entity;
using System;

namespace QuickBuyWeb.Controllers
{
    [Route("api/[Controller]")]
    public class UserController : Controller
    {
        [HttpPost]
        public ActionResult Post()
        {
            try
            {
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
                if (user.Email == "gleysonareasdasilva@gmail.com" && user.Password == "Gyn.4539766")
                    return Ok(user);

                return BadRequest("Usuario ou senha invalídos");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
