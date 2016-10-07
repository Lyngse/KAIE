using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;
using System.Net;

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

            MailMessage mm = new MailMessage(Email, to);
            mm.Subject = emne;
            mm.Body = "Navn: " + Fornavn + " " + Efternavn + "<br />" + "Email: " + Email + "<br /><br />" + Besked;

            mm.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.EnableSsl = true;
            NetworkCredential NetworkCred = new NetworkCredential();
            NetworkCred.UserName = "sorenlyng93@gmail.com";
            NetworkCred.Password = "96cgnbzt9rr";
            smtp.Credentials = NetworkCred;
            smtp.Port = 587;
            smtp.Send(mm);
        }
    }
}