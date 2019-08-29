<template>
  <div class="container-fluid">
    <!-- Creating the header for the Stars page cards -->
    <div>
      <div class="starsHeader my-auto">
        <h3 class="display-3">stars: they're just like us!</h3>
        <p class="lead">Find a movie to watch based on your favorite stars.</p>
        <img
          src="~/assets/images/his-girl-friday-grant-russell.jpg"
          class="img-fluid rounded-circle"
          alt="Image of His Girl Friday stars"
        />
      </div>
    </div>

    <!-- Cards for each star -->
    <div class="starsCards">
      <b-card class="mt-2" v-for="card in cards" :key="card.id" :header="card.name">
        <b-card-body>
          <b-card-title>Movies</b-card-title>
          <b-card-text>{{card.movies}}</b-card-text>
        </b-card-body>

        <b-card-body>
          <b-card-title>Short Bio</b-card-title>
          <b-card-text class="bio">{{card.bio}}</b-card-text>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<!-- Script to pull the data into the cards from an array - note: not all stars data has been ported over yet as it's a lot of data to do -->
<script>
export default {
  name: "Card",
  data() {
    return {
      cards: [
        {
          name: "Kevin Bacon",
          movies: "The Big Picture, She's Having A Baby, Tremors",
          bio: `Kevin Norwood Bacon was born on July 8, 1958 in Philadelphia, Pennsylvania, to Ruth Hilda (Holmes), an elementary school teacher, and Edmund Norwood Bacon, a prominent architect who was on the cover of Time Magazine in November 1964. Kevin's early training as an actor came from The Manning Street. His debut as the strict Chip Diller in National Lampoon's Animal House (1978) almost seems like an inside joke, but he managed to escape almost unnoticed from that role. Diner (1982) became the turning point after a couple of television series and a number of less-than-memorable movie roles. In a cast of soon-to-be stars, he more than held his end up, and we saw a glimpse of the real lunatic image of The Bacon. He also starred in Footloose (1984), She's Having a Baby (1988), Tremors (1990) with Fred Ward, Flatliners (1990), and Apollo 13 (1995).`,
          id: 0
        },
        {
          name: "Cary Grant",
          movies:
            "The Bachelor and the Bobby-Soxer, The Bishop's Wife, His Girl Friday",
          bio: `Cary Grant was born Archibald Alexander Leach on January 18, 1904 in Horfield, Bristol, England, to Elsie Maria (Kingdon) and Elias James Leach, who worked in a factory. In 1999, the American Film Institute named Grant the second male star of Golden Age of Hollywood cinema (after Humphrey Bogart). Grant was known for comedic and dramatic roles; his best-known films include Bringing Up Baby (1938), The Philadelphia Story (1940), His Girl Friday (1940), Arsenic and Old Lace (1944), Notorious (1946), An Affair to Remember (1957), North by Northwest (1959) and Charade (1963).`,
          id: 1
        },
        {
          name: "Doris Day",
          movies: "Lover Come Back, Pillow Talk, Send Me No Flowers",
          bio: `One of America's most prolific actresses was born Doris Mary Ann Kappelhoff on April 3, 1922, in Cincinnati, Ohio, to Alma Sophia (Welz), a housewife, and William Joseph Kappelhoff, a music teacher and choir master. Her grandparents were all German immigrants. She had two brothers, Richard, who died before she was born and Paul, a few years older. Her first starring movie role was in Romance on the High Seas (1948). The next year, she made two more films, My Dream Is Yours (1949) and It's a Great Feeling (1949). Audiences took to her beauty, terrific singing voice and bubbly personality, and she turned in fine performances in the movies she made (in addition to several hit records). She made three films for Warner Bros. in 1950 and five more in 1951. Doris was a passionate animal rights activist. She ran Doris Day Animal League in Carmel, California, which advocates homes and proper care of household pets.`,
          id: 2
        },
        {
          name: "Tom Hanks",
          movies: "Joe Versus the Volcano",
          bio: `Thomas Jeffrey Hanks was born in Concord, California, to Janet Marylyn (Frager), a hospital worker, and Amos Mefford Hanks, an itinerant cook. Hanks is known for his comedic and dramatic roles in such films as Splash (1984), Big (1988), Turner & Hooch (1989), A League of Their Own (1992), Sleepless in Seattle (1993), Forrest Gump (1994), Apollo 13 (1995), You've Got Mail (1998), The Green Mile (1999), Cast Away (2000), Road to Perdition (2002), Cloud Atlas (2012), Captain Phillips (2013), Saving Mr. Banks (2013), and Sully (2016). He has also starred in the Robert Langdon film series, and voices Sheriff Woody in the Toy Story film series. He is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon.`,
          id: 3
        },
        {
          name: "Rock Hudson",
          movies: "Lover Come Back, Pillow Talk, Send Me No Flowers",
          bio: `Rock Hudson was born Roy Harold Scherer, Jr. in Winnetka, Illinois, to Katherine (Wood), a telephone operator, and Roy Harold Scherer, an auto mechanic. He was of German, Swiss-German, English, and Irish descent. After the war he was a truck driver. His size and good looks got him into movies. His name was changed to Rock Hudson, his teeth were capped, he took lessons in acting, singing, fencing and riding. One line in his first picture, Fighter Squadron (1948), needed 38 takes. In 1956 he received an Oscar nomination for Giant (1956) and two years later Look magazine named him Star of the Year. He starred in a number of bedroom comedies, many with Doris Day, and had his own popular TV series McMillan & Wife (1971). He had a recurring role in TV's Dynasty (1981) (1984-5). He was the first major public figure to announce he had AIDS, and his worldwide search for a cure drew international attention.`,
          id: 4
        },
        {
          name: "Myrna Loy",
          movies: "The Bachelor and the Bobby-Soxer",
          bio: `Myrna Loy was born Myrna Adele Williams on August 2, 1905 in Helena, Montana, to Adelle Mae (Johnson) and David Franklin Williams. Her paternal grandparents were Welsh, and her mother was of Scottish and Swedish descent. Myrna was raised in Helena and nearby Radersburg. Her father, a rancher, was the youngest person ever elected to the Montana State legislature. Myrna would take any role that would give her exposure and showcase the talent she felt was being wasted. It seemed that she would play one vamp after another. She wanted something better. Finally her contract ran out with Warner and she signed with MGM where she got two meaty roles. One was in the The Prizefighter and the Lady (1933), and the other as Nora Charles in The Thin Man (1934) with William Powell. Most agreed that the Thin Man series would never have been successful without Myrna. Her witty perception of situations gave her the image that one could not pull a fast one over on the no-nonsense Mrs. Charles. After The Thin Man (1934), Myrna would appear in five more in the series. Myrna was a big box-office draw. She was popular enough that, in 1936, she was named Queen of the Movies and Clark Gable the king in a nationwide poll of movie goers.`,
          id: 5
        },
        {
          name: "Paul Mercurio",
          movies: "Strictly Ballroom",
          bio: `It was the lusty gyrations of The King in Jailhouse Rock that inspired nine-year-old Paul Joseph Mercurio to dance. His mother, Jean, responded with her usual supportive posture and enrolled Paul in a local ballet school. 1992 put a most remarkable wrench in the works. Paul was asked to contribute choreography for the debut work of an Australian director, Baz Luhrmann. Baz, an old friend, offered him the lead in the phenomenal Strictly Ballroom (1992). Under Luhrmann's direction, Paul's intensity took over the screen and made him an overnight icon of sensuality. Opting recently to move to just outside Sydney rather than haul his family to Los Angeles, where he is less typecast, may not have been the career move his fans would have chosen. It is certainly the choice of a man who has his priorities in order. Perhaps the near future will give Paul a chance to open his brewpub and settle down to watch his three daughters grow.`,
          id: 6
        },
        {
          name: "Rosalind Russell",
          movies: "His Girl Friday",
          bio: `The middle of seven children, she was named, not for the heroine of "As You Like It" but for the S.S. Rosalind on which her parents had sailed, at the suggestion of her father, a successful lawyer. For some time she was used in secondary roles and as a replacement threat to limit Myrna Loy's salary demands. Knowing she was right for comedy, she tested five times for the role of Sylvia Fowler in The Women (1939). George Cukor told her to "play her as a freak". She did and got the part. Her "boss lady" roles began with the part of reporter Hildy Johnson in His Girl Friday (1940), through whose male lead, Cary Grant, she met her future husband, Grant's house-guest at the time. In 1972, she received the Jean Hersholt Humanitarian Award for contributions to charity.`,
          id: 7
        },
        {
          name: "Meg Ryan",
          movies: "Joe Versus the Volcano",
          bio: `Blond-haired, blue-eyed with an effervescent personality, Meg Ryan was born Margaret Mary Emily Hyra in Fairfield, Connecticut, to Susan (Duggan), an English teacher and one-time actress, and Harry Hyra, a math teacher. She is of Ruthenian, Polish, Irish, and German ancestry ("Hyra" is a Ruthenian surname, and "Ryan" is her maternal grandmother's maiden name). In 1990, she co-starred with Tom Hanks in Joe Versus the Volcano (1990) and this time she played three roles as DeDe/Angelica/Patricia. She appeared again with Tom in the very successful Sleepless in Seattle (1993) for which she was again nominated for the Golden Globe. In 1994, Meg decided to act against type when she appeared as the alcoholic wife and mother in When a Man Loves a Woman (1994). After that, she went back to "cute" with both I.Q. (1994) and French Kiss (1995). In 1994, Meg won the Harvard Hasty Pudding Award as "Woman of the Year" and was voted as being one of "The 50 most beautiful people in the world 1994" by People Magazine.`,
          id: 8
        },
        {
          name: "Martin Short",
          movies: "The Big Picture",
          bio: `Short was born in Hamilton, Ontario, the youngest of five children of Olive Grace (née Hayter; 1913–1968), a concertmistress of the Hamilton Symphony Orchestra, and Charles Patrick Short (1909–1970), a corporate executive with Stelco, a Canadian steel company. He is known for his work on the television programs SCTV and Saturday Night Live. He has starred in comedy films, such as Three Amigos (1986), Innerspace (1987), Three Fugitives (1989), Father of the Bride (1991), Pure Luck (1991), Captain Ron (1992), Father of the Bride Part II (1995), Mars Attacks! (1996), Jungle 2 Jungle (1997), and The Santa Clause 3: The Escape Clause (2006), and created the characters Jiminy Glick and Ed Grimley. In 1999, he won a Tony Award for his lead performance in a Broadway revival of Little Me. Short appeared in a 2001 episode on the Celebrity Who Wants to Be a Millionaire hosted by Regis Philbin, winning $32,000 for his charity, Loyola High School. Short has actively campaigned for the Women's Research Cancer Fund, and he accepted a "Courage Award" on behalf of his late wife at a 2011 gala by the group. Short is also a member of the Canadian charity Artists Against Racism.`,
          id: 9
        },
        {
          name: "Shirley Temple",
          movies: "The Bachelor and the Bobby-Soxer",
          bio: `Shirley Temple was easily the most popular and famous child star of all time. She got her start in the movies at the age of three and soon progressed to super stardom. Shirley could do it all: act, sing and dance and all at the age of five! Fans loved her as she was bright, bouncy and cheerful in her films and they ultimately bought millions of dollars' worth of products that had her likeness on them. Dolls, phonograph records, mugs, hats, dresses, whatever it was, if it had her picture on there they bought it. Shirley was box-office champion for the consecutive years 1935-36-37-38, beating out such great grown-up stars as Clark Gable, Bing Crosby, Robert Taylor, Gary Cooper and Joan Crawford. By 1939, her popularity declined. Although she starred in some very good movies like Since You Went Away (1944) and the The Bachelor and the Bobby-Soxer (1947), her career was nearing its end. Later, she served as an ambassador to Ghana and Czechoslovakia. It was once guessed that she had more than 50 golden curls on her head.`,
          id: 10
        },
        {
          name: "J.T. Walsh",
          movies: "The Big Picture",
          bio: `J.T. Walsh was born on September 28, 1943 in San Francisco, California, USA as James Thomas Patrick Walsh. He was an actor, known for Sling Blade (1996), Breakdown (1997) and Good Morning, Vietnam (1987). He was married to Susan West.`,
          id: 11
        },
        {
          name: "Fred Ward",
          movies: "Tremors",
          bio: `A marvelous character actor with intense eyes, a sly grin and somewhat grizzled appearance, Golden Globe-winner Fred Ward has nearly 90 appearances under his belt in many tremendous films. He first became interested in acting after serving three years in the US Air Force and studied at New York's Herbert Berghof Studio. Ward then went to Europe, where he dubbed many Italian movies, and first appeared on-screen in two films by Roberto Rossellini. He then returned to the United States, and got his first decent role alongside Clint Eastwood in the nail-biting prison film Escape from Alcatraz (1979). scored the lead in the interesting spy / martial arts movie Remo Williams: The Adventure Begins (1985), which unfortunately was not as successful as had been the mega-selling series of Remo Williams books. However, during "Remo", Ward demonstrated a great knack for comedic timing and satirical performance, and used this ability was to great effect in several films, including playing Kevin Bacon's fellow giant-worm-fighting handyman in the light-hearted sci-fi hit Tremors (1990).`,
          id: 12
        },
        {
          name: "Teresa Wright",
          movies: "Shadow of a Doubt",
          bio: `Born Muriel Teresa Wright in the Harlem district of New York City on October 27, 1918, her parents divorced when she was quite young and she lived with various relatives in New York and New Jersey. A natural and lovely talent who was discovered for films by Samuel Goldwyn, the always likable Teresa Wright distinguished herself early on in high-caliber, Oscar-worthy form -- the only performer ever to be nominated for Oscars for her first three films. Always true to herself, she was able to earn Hollywood stardom on her own unglamorized terms. By this time a mature actress now in her 50s, challenging stage work came in the form of "The Effect of Gamma Rays on Man-in-the Moon Marigolds", "Long Day's Journey Into Night", "Morning's at Seven" and "Ah, Wilderness!" Teresa also graced the stage alongside George C. Scott's Willy Loman (as wife Linda) in an acclaimed presentation of "Death of a Salesman" in 1975, and appeared opposite Scott again in her very last play, "On Borrowed Time" (1991). After almost a decade away from films, she came back to play the touching role of an elderly landlady opposite Matt Damon in her last picture, John Grisham's The Rainmaker (1997).`,
          id: 13
        },
        {
          name: "Loretta Young",
          movies: `The Bishop's Wife`,
          bio: `Loretta Young was born Gretchen Young in Salt Lake City, Utah on January 6, 1913, to Gladys (Royal) and John Earle Young. Her parents separated when Loretta was three years old. Sweet, sweeter, sweetest. No combination of terms better describes the screen persona of lovely Loretta Young. In the 1940s, Loretta was still one of the most beautiful ladies in Hollywood. She reached the pinnacle of her career when she won the Academy Award for Best Actress in The Farmer's Daughter (1947), the tale of a farm girl who rises through the ranks and becomes a congresswoman. It was a smash and today is her best remembered film. The same year, she starred in the delightful fantasy The Bishop's Wife (1947) with David Niven and Cary Grant. It was another box office success and continues to be a TV staple during the holiday season. In 1949, Loretta starred in the well-received film, Mother Is a Freshman (1949) with Van Johnson and Rudy Vallee and Come to the Stable (1949). The latter garnered Loretta her second Oscar nomination, but she lost to Olivia de Havilland in The Heiress (1949). In 1953, Loretta made It Happens Every Thursday (1953), which was to be her final big screen role.`,
          id: 14
        }
      ]
    };
  }
};
</script>

<!-- Miscellaneous styling for the cards -->
<style>
.starsHeader {
  padding: 1rem;
}

.starsCards {
  text-align: left;
  padding: 1rem;
}

.card-header {
  font-size: 2rem;
  color: #007bff;
}
</style>
