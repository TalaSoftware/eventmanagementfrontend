using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Discord;
using Discord.Commands;
using Discord.WebSocket;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualBasic;

namespace BANO.Controllers
{
    [ApiController]
    [Consumes("application/json")]
    public class WeatherForecastController : ControllerBase
    {
        private static DiscordSocketClient _client = new DiscordSocketClient();
        private readonly CommandService _commands;
        private readonly IServiceProvider _services;
        
        [HttpPost]
        [Route("Event/BingoEvent")]
        public async Task POST(BingoAction a)
        {
           // BingoAction a=JsonSerializer.Deserialize<BingoAction>(values);
            string token = "OTQyMzM5Mzk1MTY2NTYwMjY3.YgjD8w.5JUbTpedxQyq_Sd5QE2sxbRTsqA";
            await _client.LoginAsync(TokenType.Bot, token);
            await _client.StartAsync();
     
            IMessageChannel channel = _client.GetGuild(658991618208038922).GetTextChannel(942335989966331924);
            String path = Path.Combine("C:\\Users\\djima\\RiderProjects\\Databout\\Databout\\test.jpg");
            FileAttachment fileAttachment = new FileAttachment(
                path,"test.jpg","een geweldige stofzuiger"
            );
            channel.SendFileAsync(fileAttachment, a.username + " has killed "+a.npcName+ " and got "+a.items[0]);
            Console.Out.WriteLine(a.username + " has killed "+a.npcName+ " and got "+a.items[0]);
        }
        
        [HttpGet]
        [Route("Event")]
        public async Task MainAsync()
        {
            string token = "OTQyMzM5Mzk1MTY2NTYwMjY3.YgjD8w.5JUbTpedxQyq_Sd5QE2sxbRTsqA";
            await _client.LoginAsync(TokenType.Bot, token);
            await _client.StartAsync();
            await Task.Delay(-1);
        }
       
        
    }
}