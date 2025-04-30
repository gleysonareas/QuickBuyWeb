using Microsoft.AspNetCore.Mvc;
using QuickBuyDomain.Contract;
using QuickBuyDomain.Entity;
using System;

namespace QuickBuyWeb.Controllers
{
    [Route("api/[Controller]")]
    public class OrderController : Controller
    {

        private readonly IRequestRepository _orderRepository;

        public OrderController(IRequestRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Requestt order)
        {
            try
            {
                _orderRepository.Add(order);
                return Ok(order.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }

    }
}
