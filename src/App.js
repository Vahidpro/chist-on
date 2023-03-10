import "./App.css";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header/Header";
import RiddlesList from "./Components/Riddles/RiddlesList";

function App() {
	let id = 1;
	let number = 1;
	const Dummy_List = [
		{
			number: number,
			id: id,
			question: "آن چیست که چیستان است؟",
			answer: "چیستان دیگه!",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "آن چیست که چیستان نیست؟",
			answer: "فردا",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question:
				"خیلی خطرناک و وحشی است اما اگر وارونه اش کنید آرام و رام می شود.",
			answer: "مار",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question:
				"شهری است که با یک خواننده شروع می شود و با یک ماده معطر تمام می شود.",
			answer: "اندیمشک (اندی + مشک)",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "آن چيست كه بسيارش كم است و آن چيست كه كمش بسيار است؟",
			answer: "دوست و دشمن",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question:
				"آن چيست كه من يكي دارم تو دو تا داري شاه سه تا و پسر پادشاه نه تا؟",
			answer: "نقطه",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "چهار انگشت و یک شست دارد اما نه استخوان دارد و نه مغز!",
			answer: "دستکش",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question:
				"افراد دور را به هم می رساند ولی هیچ کس نمی تواند سوار آن شود. در نهایت قبل از حرکت صدایش را می توانید بشنوید",
			answer: "تلفن",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "چه چیزی گردن دارد اما سر ندارد؟",
			answer: "بطری",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "چه چیزی هر چقدر هم که باران بر آن ببارد خیس تر نمی شود؟",
			answer: "آب حوض",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question:
				"هر که آن را بسازد، آن را فاش نمی کند. هر که آن را بگیرد، آن را نمی داند. و هر که آن را می داند، آن را نمی خواهد. چیست؟",
			answer: "پول تقلبی",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question:
				"بدون آن هرگز پیروز نخواهید شد، اما اگر بیش از حد آن را داشته باشید مطمئناً شکست خواهید خورد.",
			answer: "اعتماد به نفس",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question:
				"آن چیست که در کل ۳ بار به هر فردی داده می‌شود. بار اول و دوم رایگان است و بار سوم باید در ازای دریافتِ آن، پول پرداخت کنید؟",
			answer: "دندان",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "آن چیست که دست دارد، ولی نمی تواند کف بزند؟",
			answer: "ساعت",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "آن چیست که انگشت شصت و چهار انگشت را دارد، اما دست نیست؟",
			answer: "یک دستکش",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "آن چیست که پشت و رو دارد اما بدن ندارد؟",
			answer: "سکه",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question:
				"این فرد کیست که هر کس نزدش برود باید فوراً کلاهش را در مقابل او دربیارد؟ حتی بالاترین مقام یک کشور!",
			answer: "آرایشگر",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "آن چیست که وقتی نیست، نیست؟",
			answer: "هست",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "آن چیست که من نمیدانم چیست و تو هم نمیدانی چیست؟",
			answer: "چیزی است که هردو نمیدانیم",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "خر در طویله ولی گوش هایش  بیرون است؟",
			answer: "تیرآهن",
		},
		{
			number: (number += 1),
			id: (id += 1),
			question: "آن چیست؟",
			answer: "آن",
		},
		// {
		// 	id: (id += 1),
		// 	question: "",
		// 	answer: "",
		// },
	];
	return (
		<div className="App">
			<Header />
			<RiddlesList riddles={Dummy_List}></RiddlesList>
			<Footer></Footer>
		</div>
	);
}

export default App;
