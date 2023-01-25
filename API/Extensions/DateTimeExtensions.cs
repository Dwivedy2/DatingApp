namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime dob)
        {
            var age = DateTime.UtcNow.Year - dob.Year;
            return age;
        }
    }
}