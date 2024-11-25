using Microsoft.EntityFrameworkCore;

namespace angular_with_dotnet.Models
{
    public class Connection : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=DESKTOP-16PTMFU\\SQLEXPRESS;Database=Angular;Integrated Security=True");
        }
        public DbSet<User> Users { get; set; }
    }
}
