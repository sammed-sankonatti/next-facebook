
import StoryCard from './StoryCard';

const stories = [
{
    name: "King Kohli",
    src: "https://wallpapercave.com/wp/wp8946093.jpg",
    profile: "https://wallpapercave.com/wp/wp6426535.jpg",
  },
{
    name: "MS Dhoni",
    src: "https://wallpapercave.com/wp/wp6390941.jpg",
    profile: "https://wallpapercave.com/wp/wp1859027.jpg",
  },
  {
    name: "Tony Stark",
    src: "https://wallpapercave.com/wp/wp7201219.jpg",
    profile: "https://wallpapercave.com/wp/wp7201240.jpg",
  },
  {
    name: "Captain Rogers",
    src: "https://wallpapercave.com/uwp/uwp942202.jpeg",
    profile: "https://wallpapercave.com/uwp/uwp942201.jpeg",
  },
  {
    name: "Rishabh pant",
    src: "https://wallpapercave.com/wp/wp9025478.jpg",
    profile: "https://wallpapercave.com/wp/wp9025581.jpg",
  },
];

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto" >
            {stories.map((story)=>(
                <StoryCard name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
