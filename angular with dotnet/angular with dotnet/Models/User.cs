namespace angular_with_dotnet.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Image { get; set; }

        public User(int id, string name, string email, string password, string image)
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
            Image = image;
        }
    }
}
