using System;
using System.Collections.Generic;

namespace BANO.Controllers
{
    public class BingoAction{
  
        public String username { get; set; }
        public String eventCode { get; set; }
        public String npcName{ get; set; }
        public List<String> items{ get; set; }
    }
}