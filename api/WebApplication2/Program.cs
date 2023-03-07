using Microsoft.EntityFrameworkCore;
using WebApplication2.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MeetingDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("MeetingAppCon"));
});
builder.Services.AddCors(options => options.AddPolicy(name: "Meeting",
    policy =>
    {
        policy.WithOrigins("http://localhost:5237", "http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
    }));

//builder.Services.AddDbContext<MeetingDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MeetingAppCon")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("Meeting");
app.UseAuthorization();

app.MapControllers();

app.Run();
