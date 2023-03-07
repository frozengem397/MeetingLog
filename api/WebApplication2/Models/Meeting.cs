namespace WebApplication2.Models
{
    public class Meeting

    {
        public int Id { get; set; }
        public int DialogueId { get; set; }

        public string DialogueSubject { get; set; }

        public string DialogueContent { get; set; }

        public string DateOfmeeting { get; set; }
        public int Priority { get; set; }

    }
}
