namespace Api.Handlers
{
	public class Hashing
	{
		private static string GetRandomSalt()
		{
			//panjang random salt 12
			return BCrypt.Net.BCrypt.GenerateSalt(12);
		}
		public static string HashPassword(string password)
		{
			return BCrypt.Net.BCrypt.HashPassword(password, GetRandomSalt());
		}
		public static bool ValidatePassword(string password, string correctHash)
		{
			//password = input user
			//correctHash = password yg tersimpan di db
			return BCrypt.Net.BCrypt.Verify(password, correctHash);
		}
	}
}
