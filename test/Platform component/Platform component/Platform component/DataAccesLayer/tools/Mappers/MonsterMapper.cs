using System.Collections.Generic;
using BANO.Domain;

namespace BANO.GoogleSheets.Domain
{
    public class NpcMapper
    {
        public static List<Monster> map(IList<IList<object>> Sheet, List<Monster> monsters)
        {
            foreach (var row in Sheet)
            {
                Monster monster = new()
                {
                    name = row[0].ToString()
                };
                monsters.Add(monster);
                monster.GroundItems = mapItems(row.Count, row);
            }

            return monsters;
        }

        static List<GroundItem> mapItems(int amount, IList<object> value)
        {
            List<GroundItem> items = new List<GroundItem>();
            for (int i = 1; i < amount; i++)
            {
                GroundItem groundItem = new GroundItem();
                groundItem.name = value[i].ToString();
                items.Add(groundItem);
            }

            return items;
        }
    }
}