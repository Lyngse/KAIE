using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KAIE.Startup))]
namespace KAIE
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
