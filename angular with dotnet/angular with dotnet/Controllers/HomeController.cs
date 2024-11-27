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
            if (profile != null)
            {
                var filename=profile.FileName;
                var path=Path.Combine(Directory.GetCurrentDirectory(),"wwwroot/images", filename);

                using (FileStream stream = new FileStream(path, FileMode.Create))
                {
                    profile.CopyTo(stream);
                }
                User user = new User(0, name, email, password, filename);
                db.Users.Add(user);
                db.SaveChanges();
            }
            return Ok();
        }

        public IActionResult Fetchuser()
        {
            var users = db.Users.ToList();
           
            return Ok(users);
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
        public IActionResult Delete([FromBody] int id)
        {
            var delete = db.Users.Find(id);
            db.Users.Remove(delete);
            db.SaveChanges();
            return Ok();
        }

        
    }
}
