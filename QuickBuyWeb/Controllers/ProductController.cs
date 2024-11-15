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
                return Json(_productRepository.GetAll());
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
                product.Validate();
                if (!product.IsValid)
                {
                    return BadRequest(product.GetMessageValidation());
                }
                if (product.Id > 0)
                {
                    _productRepository.Update(product);
                }
                else
                {
                    _productRepository.Add(product);
                }
                return Created("api/product", product);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("Delete")]
        public IActionResult Delete([FromBody] Product product)
        {
            try
            {
                _productRepository.Delete(product);
                return Json("Produto deletado com sucesso");
            }
            catch (Exception ex) { return BadRequest(ex.ToString()); }
        }

        [HttpPost("FileUpload")]
        public IActionResult FileUpload()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["sendFile"];
                var nameFile = formFile.FileName;
                var extensionFile = nameFile.Split(".").Last();
                string newNameFile = GenerateNewNameFile(nameFile, extensionFile);
                var fileFolder = _hostingEnvironment.WebRootPath + "\\files\\";
                var completeName = fileFolder + newNameFile;

                using (var streamFile = new FileStream(completeName, FileMode.Create))
                {
                    formFile.CopyTo(streamFile);
                }
                //return Ok("Arquivo enviado com sucesso");
                return Json(newNameFile);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        private static string GenerateNewNameFile(string nameFile, string extensionFile)
        {
            var compactNames = Path.GetFileNameWithoutExtension(nameFile).Take(10).ToArray();
            var newNameFile = new string(compactNames).Replace(" ", "-");
            newNameFile = $"{newNameFile}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}.{extensionFile}";
            return newNameFile;
        }
    }
}
