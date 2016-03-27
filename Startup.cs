using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KAE.Startup))]
namespace KAE
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
