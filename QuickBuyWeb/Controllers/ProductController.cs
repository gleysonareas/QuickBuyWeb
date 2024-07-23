using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuyDomain.Contract;
using QuickBuyDomain.Entity;
using System;
using System.IO;
using System.Linq;

namespace QuickBuyWeb.Controllers
{
    [Route("api/[Controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnvironment;
        public ProductController(
            IProductRepository productRepository,
            IHttpContextAccessor httpContextAccessor,
            IHostingEnvironment hostingEnvironment
            )
        {
            _productRepository = productRepository;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public IActionResult Get()
        {

            try
            {
                return Ok(_productRepository.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product product)
        {
            try
            {
                _productRepository.Add(product);
                return Created("api/product", product);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("FileUpload")]
        public IActionResult FileUpload()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["sendFile"];
                var nameFile = formFile.FileName;
                var extensionFile = nameFile.Split(".").Last();
                var compactNames = Path.GetFileNameWithoutExtension(nameFile).Take(10).ToArray();
                var newNameFile = new string(compactNames).Replace(" ", "-") + "." + extensionFile;
                var fileFolder = _hostingEnvironment.WebRootPath + "\\files\\";
                var completeName = fileFolder + newNameFile;

                using (var st)
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }

