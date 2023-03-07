using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;
using WebApplication2.Data;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeetingController : ControllerBase
    {
        private readonly MeetingDbContext _context;

        public MeetingController(MeetingDbContext context)
        {
            _context = context;
        }
        
            
        
        [HttpGet]
        public async Task<ActionResult<List<Meeting>>> Get()
        {
            return Ok(await _context.Meetings.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Meeting>>> Create(Meeting meet)
        {
            _context.Meetings.Add(meet);
            await _context.SaveChangesAsync();
            return Ok(await _context.Meetings.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<Meeting>>> UpdateMeeting(Meeting meet)
        {
            var dbMeeting = await _context.Meetings.FindAsync(meet.Id);
            if(dbMeeting == null)
            {
                return BadRequest("Meeting not found");
            }
            dbMeeting.DialogueId = meet.DialogueId;
            dbMeeting.DialogueSubject = meet.DialogueSubject;
            dbMeeting.DialogueContent = meet.DialogueContent;
            dbMeeting.DateOfmeeting = meet.DateOfmeeting;
            dbMeeting.Priority = meet.Priority;

            await _context.SaveChangesAsync();
            return Ok(await _context.Meetings.ToListAsync());
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<List<Meeting>>> DeleteMeeting(int id)
        {
            var dbMeeting = await _context.Meetings.FindAsync(id);
            if (dbMeeting == null)
            {
                return BadRequest("Meeting not found");
            }
            _context.Meetings.Remove(dbMeeting);
            await _context.SaveChangesAsync();
            return Ok(await _context.Meetings.ToListAsync());
        }




    }
}
