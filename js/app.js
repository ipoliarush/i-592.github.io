document.addEventListener("DOMContentLoaded", function() {

	let thank = new Vue({
		el: '#thank',
		data: {
			visible: false
		},
		methods: {
			close: function() {
				this.visible = false
			}
		}
	})

	let navMenu = new Vue({
		el: '#header',
		data: {
			activeItem: 0,
			mobile: false,
			isOpen: false,
			links: [
				{
					text: 'Home',
					href: '.main-slider'
				},
				{
					text: 'Services',
					href: '.we-do'
				},
				{
					text: 'Portfolio',
					href: '.projects'
				},
				{
					text: 'Team',
					href: '.employees'
				},
				{
					text: 'Join us',
					href: '.join'
				},
				{
					text: 'Contact',
					href: '.contacts'
				}
			]
		},
		created: function() {
			if (document.documentElement.clientWidth < 760) {
				this.mobile = true
			}
		},
		methods: {
			linkClick: function(n) {
				this.activeItem = n
				const el = this.links[n].href
				scrollTo(el)

				if (this.isOpen)
					this.isOpen = false
			}
		}
	})

	window.addEventListener('resize', () => {
		if (document.documentElement.clientWidth < 760) {
			if (navMenu.mobile === false)
				navMenu.mobile = true
		} else {
			if (navMenu.mobile === true)
				navMenu.mobile = false
		}
	})

	const scrollTo = (el) => {
		document.querySelector(el).scrollIntoView({block: "start", behavior: "smooth"})
	}

	let vacanciesContent = {
		1: {
			text: "Syxgame studio is seeking a Project Manager who will be responsible for managing the development cycle with our artists, animators, technical artists, engineers, QA specialists and external parties from conception to regulatory approval. The Digital Project Manager position is full-time, immediately available on-site at our Regus office, Tbilisi, Georgia",
			responsibilities: [
				'Manage product plans, schedules and resources to ensure committed milestones and delivery dates are met.',
				'Participate in game and feature design sessions with Game Design team.',
				'Provide team members with details and requirements for all conceptualized products.',
				'Identify, communicate and resolve problem areas and risks in the production cycle and schedules.',
				'Organize weekly meetings with team to review the status of products in production and in testing.',
				'Manage communication with third parties, including customers, external stakeholders and partnering design groups.',
				'Generally, support Operational team on a variety of projects and tasks as needed.'
			],
			requirements: [
				'Bachelor’s degree in Engineering, Computer Science, Business or related field.',
				'7+ years of project management experience required.',
				'Mobile gaming experience is preferred.',
				'Excellent written and verbal communication skills.',
				'Must be highly organized and able to multitask in a fast-paced environment.',
				'Strong working knowledge of Microsoft Office, Jira, and other project management and QA tools.'
			]
		},
		2: {
			text: "We are looking for a highly-skilled and passionate Sound Designer to join our team. As a senior sound designer, you’ll apply your refined audio aesthetic and ear to creating audio for popular games. We value ideas and the freedom to innovate with amazing audio content and technologies.",
			responsibilities: [
				'Expert knowledge of sound design and mixing methods and tools.',
				'Extensive audio engineering and DAW skills and knowledge.',
				'Experience with Unreal or Unity editors, including scripting, level editor, animation and linear editors.',
				'Experience with audio toolsets/middleware and implementation of audio assets into game builds.',
				'Mixing and mastering multitrack audio for use in linear or interactive contexts.',
				'Ability to design and implement audio scripting to achieve desired in-game audio features and dynamic playback.',
				'Troubleshooting audio issues',
			],
			requirements: [
				'Must have shipped at least two AAA titles and have 3 years as part of an audio team.',
				'Excellent knowledge and understanding of the video game development process.',
				'Must have experience with field recording.',
				'Must have experience creating audio for linear media.',
				'Must be a game player- should be able to talk about and deconstruct other current games’ audio quality and implementation.',
			]
		},
		3: {
			text: "As our QA Tester and Generalist, you will play a key role in ensuring quality in our product in order to deliver a great experience to our customers. If you are a fire-and-forget tester who can solve problems independently, and who wants to make a positive difference in people's lives, this position may be for you.",
			responsibilities: [
				'Work under the direction of the Syxgame to provide test support for experienced game designers, artists, and engineers.',
				'Perform daily smoke tests of game builds, using the build computer and the install scripts.',
				'Run through and write test plans for existing and new features. Become familiar with the project design by closely reading project documentation and reaching out regularly to our team of game developers.',
				'Verify that identified bugs are fixed in the database.',
				'Identify and bug new issues that occur in the HMD and tablet interface.',
				'Build on your own fundamental QA skills by learning the specifics of game development QA for mobile devices, VR headsets, and experimental technology.'

			],
			requirements: [
				'The #1 qualification is positive-energy and a can-do enthusiasm for project quality.',
				'At least 1 year/1 shipped project in mobile or PC gaming, or software QA.',
				'Strong oral, written, and interpersonal communication skills, including the ability to interact with team members at all levels.',
				'Familiarity with at least one bug database program and standard office software (Word, Excel, Outlook.)',
				'Ability to quickly pick up new technical skills, such as troubleshooting sensors, learning to use uncommon software like ADB or Sixense Device Tool, and configuring network connections on fussy routers.'
			]
		}
	}

	let vacancies = new Vue({
		el: '#vacancies',
		data: {
			post: 1,
			content: vacanciesContent
		}
	})

	let sliderMixin = {
		data: function() {
			return {
				slide: 1,
				nextSlideTime: 2000,
				countSlide: null,
				position: 0,
				maxPosition: null
			}
		},
		methods: {
			nextSlide: function() {
				if (this.slide === this.countSlide) {
					this.slide = 1
					this.position = 0
				}
				else {
					this.slide++
					this.position += 100
				}
			},
			prevSlide: function() {
				if (this.slide === 1) {
					this.slide = this.countSlide
					this.position = this.maxPosition
				}
				else {
					this.slide--
					this.position -= 100
				}
			},
			autoSlider: function() {  
				this.sliderInterval = setInterval(() => {
					this.nextSlide()
				}, this.nextSlideTime)
			},
			clearAutoSlider: function() {
				clearInterval(this.sliderInterval)
			}
		},
		computed: {
			thisPositionCalc: function() {
				return this.position = this.slide * 100 - 100
			}
		},
		mounted: function() {
			this.autoSlider()
			this.maxPosition = this.countSlide * 100 - 100
		}
	}

	let mainSlider = new Vue({
		mixins: [sliderMixin],
		el: '#main-slider',
		data: {
			countSlide: 5,
			nextSlideTime: 5000
		}
	})

	let slider1 = new Vue({
		mixins: [sliderMixin],
		el: '#projects-slider-1',
		data: {
			countSlide = 3,
		}
	})

	let slider2 = new Vue({
		mixins: [sliderMixin],
		el: '#projects-slider-2',
		data: {
			countSlide = 3,
		}
	})

	let slider3 = new Vue({
		mixins: [sliderMixin],
		el: '#projects-slider-3',
		data: {
			countSlide = 3,
		}
	})

	let form = new Vue({
		el: '#form',
		data: {
			email: null,
			comment: null
		},
		methods: {
			sendForm: function() {
				let fd = new FormData()

				fd.append('email', this.email)
				fd.append('comment', this.comment)

				axios.post('/form.php', fd)
					.then(() => {
						thank.visible = true
					})
			}
		}
	})

})
