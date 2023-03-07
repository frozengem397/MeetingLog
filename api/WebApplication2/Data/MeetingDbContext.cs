using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;

namespace WebApplication2.Data
{
    public class MeetingDbContext:DbContext
    {
        public MeetingDbContext(DbContextOptions<MeetingDbContext> options): base(options)
        {
            
        }
        public DbSet<Meeting> Meetings =>Set<Meeting>();



    }
}
