using angular_with_dotnet.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace angular_with_dotnet.Controllers
{
    public class HomeController : Controller
    {

        Connection db = new Connection();

        public IActionResult Index()
        {
            return Ok();
        }
        [HttpPost]
        public IActionResult Adduser(string name,string email,string password, IFormFile profile)
        {
            
            return Ok();
        }

        public IActionResult Fetchuser()
        {
            var user= db.Users.FirstOrDefault();
            return Ok(user);
        }
        [HttpPut]
        public IActionResult update([FromBody] User user)
        {

            var data = db.Users.Find(user.Id);
            data.Name=user.Name;
            data.Email = user.Email;
            data.Password = user.Password;
            db.SaveChanges();
            return Ok();
        }
        public IActionResult Privacy()
        {
            return View();
        }

        
    }
}
