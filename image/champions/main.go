package main

import (
	"errors"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"io"
	"log"
	"net/http"
	"os"
	"time"
)

func main() {

	for _, name := range champions {
		fileName := name + ".png"
		URL := "https://opgg-static.akamaized.net/images/lol/champion/" + fileName + "?image=c_scale,q_auto,w_240&v=1642648372"
		err := downloadFile(URL, fileName)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(fileName)
		time.Sleep(time.Second)
	}

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	app.Listen(":3001")
}

func downloadFile(URL, fileName string) error {
	//Get the response bytes from the url
	response, err := http.Get(URL)
	if err != nil {
		return err
	}
	defer response.Body.Close()

	if response.StatusCode != 200 {
		return errors.New("Received non 200 response code")
	}
	//Create a empty file
	file, err := os.Create(fileName)
	if err != nil {
		return err
	}
	defer file.Close()

	//Write the bytes to the fiel
	_, err = io.Copy(file, response.Body)
	if err != nil {
		return err
	}

	return nil
}

var champions = []string{
	//"Zeri",
	//"Vex",
	//"Akshan",
	//"Gwen",
	//"Viego",
	//"Rell",
	//"Seraphine",
	//"Samira",
	//"Yone",
	//"Lillia",
	//"Sett",
	//"Aphelios",
	//"Senna",
	//"Qiyana",
	//"Yuumi",
	//"Sylas",
	//"Neeko",
	//"Pyke",
	//"KaiSa",
	//"Zoe",
	//"Ornn",
	//"Kayn",
	//"Rakan",
	//"Xayah",
	//"Camille",
	//"Ivern",
	//"Kled",
	//"Taliyah",
	//"AurelionSol",
	//"Jhin",
	//"Illaoi",
	//"Kindred",
	//"TahmKench",
	//"Ekko",
	//"Bard",
	//"RekSai",
	//"Kalista",
	//"Azir",
	//"Gnar",
	//"Braum",
	//"VelKoz",
	//"Yasuo",
	//"Jinx",
	//"Lucian",
	//"Aatrox",
	//"Lissandra",
	//"Zac",
	//"Quinn",
	//"Thresh",
	//"Vi",
	//"Nami",
	//"Zed",
	//"Elise",
	//"KhaZix",
	//"Syndra",
	//"Rengar",
	//"Diana",
	//"Zyra",
	//"Jayce",
	//"Draven",
	//"Darius",
	//"Varus",
	//"Hecarim",
	//"Lulu",
	//"Fiora",
	//"Nautilus",
	//"Ziggs",
	//"Sejuani",
	//"Viktor",
	//"Ahri",
	//"Volibear",
	//"Fizz",
	//"Shyvana",
	//"Graves",
	//"Xerath",
	//"Riven",
	//"Talon",
	//"Skarner",
	//"MonkeyKing",
	//"Leona",
	//"Yorick",
	//"Orianna",
	//"Vayne",
	//"Rumble",
	//"Brand",
	//"LeeSin",
	//"Nocturne",
	//"JarvanIV",
	//"Maokai",
	//"Karma",
	//"Renekton",
	//"Caitlyn",
	//"Cassiopeia",
	//"Trundle",
	//"Irelia",
	//"LeBlanc",
	//"Lux",
	//"Swain",
	//"Sona",
	"MissFortune",
	"Urgot",
	"Galio",
	"Vladimir",
	"XinZhao",
	"KogMaw",
	"Olaf",
	"Malzahar",
	"Akali",
	"Garen",
	"Kennen",
	"Shen",
	"Ezreal",
	"Mordekaiser",
	"Gragas",
	"Pantheon",
	"Poppy",
	"Nidalee",
	"Udyr",
	"Heimerdinger",
	"Shaco",
	"Nasus",
	"Corki",
	"Katarina",
	"Blitzcrank",
	"DrMundo",
	"Janna",
	"Malphite",
	"Gangplank",
	"Taric",
	"Kassadin",
	"Veigar",
	"Anivia",
	"Rammus",
	"Amumu",
	"ChoGath",
	"Karthus",
	"Evelynn",
	"Tryndamere",
	"Twitch",
	"Singed",
	"Zilean",
	"Alistar",
	"Annie",
	"Ashe",
	"Fiddlesticks",
	"Jax",
	"Kayle",
	"MasterYi",
	"Morgana",
	"Nunu",
	"Ryze",
	"Sion",
	"Sivir",
	"Soraka",
	"Teemo",
	"Tristana",
	"TwistedFate",
	"Warwick",
}
