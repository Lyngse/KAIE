using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;

namespace KAIE.Helpers
{
    public class Email
    {
        public void Send(string fornavn, string efternavn, string email, string emne, string besked)
        {
            string Fornavn = fornavn;
            string Efternavn = efternavn;
            string Email = email;
            string to = "superlyng@msn.com";
            string Emne = emne;
            string Besked = besked;


            SmtpClient client = new SmtpClient("smtp.gmail.com");
            MailAddress From = new MailAddress(Email, Fornavn + " " + Efternavn);
            MailAddress To = new MailAddress(to);
            MailMessage mail = new MailMessage(From, To);
            mail.Subject = Emne;
            mail.Body = Besked;
            client.Send(mail);

        }
    }
}