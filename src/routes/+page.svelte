<script>
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
	import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
	import a4Image from '/src/routes/images/a4.jpg';
	import { fade } from 'svelte/transition';
	import { scrollTo } from 'svelte-scrollto';
	import Modal from '$lib/components/Modal/Modal.svelte';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	import { AccordionItem, Accordion } from 'flowbite-svelte';
	const items = Array(3);

	const open_all = () => items.forEach((_, i) => (items[i] = true));
	const close_all = () => items.forEach((_, i) => (items[i] = false));
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink,
	} from 'flowbite-svelte';

	let visible = false;
	let OpenSvelteKit,
		OpenTailwindCSS,
		OpenJavaScript,
		OpenHTML,
		OpenJava,
		OpenCplus,
		OpenC,
		OpenPython = false;
	let welcomeText = '';
	let hello = '';
	onMount(() => {
		visible = true;
		const text1 = 'Welcome to my Web';
		let j = 0;
		const intervalId1 = setInterval(() => {
			hello += text1.charAt(j);
			j++;
			if (j > text1.length) {
				clearInterval(intervalId1);
			}
		}, 100);
		const text = '歡迎來到Wayne的網頁，關於我的資訊都在這裡!';
		let i = 0;
		const intervalId = setInterval(() => {
			welcomeText += text.charAt(i);
			i++;
			if (i > text.length) clearInterval(intervalId);
		}, 100);
	});
</script>

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<title>許朝威個人網站</title>
</head>

<body>
	<div>
		<div class="  w-full">
			<header class="" id="a0">
				<nav class="  border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
					<div class=" mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
						<a href="/" class="flex items-center">
							<img src="/src/routes/images/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
							<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
								>Wayne's Web</span
							>
						</a>
						<div class="flex items-center  lg:order-2">
							<button
								data-collapse-toggle="mobile-menu-2"
								type="button"
								class="ml-1  inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
								aria-controls="mobile-menu-2"
								aria-expanded="false"
							>
								<Chevron type="button" aria-controls="mobile-menu-2" aria-expanded="false"
									><p class="text-l">Open menu</p></Chevron
								>
							</button>
							<Dropdown>
								<DropdownItem><a href="#a0">首頁</a></DropdownItem>
								<DropdownItem>關於我</DropdownItem>
								<DropdownItem>大學生活</DropdownItem>
								<DropdownItem>結語</DropdownItem>
							</Dropdown>
						</div>
						<div
							class="navbar hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
							id="mobile-menu-2"
						>
							<ul class="mt-4 flex flex-col text-xl font-medium lg:mt-0 lg:flex-row lg:space-x-8">
								<li>
									<a
										href="#a0"
										on:click|preventDefault={function handleScrollToa1() {
											scrollTo({ y: document.querySelector('#a0').offsetTop, duration: 1000 });
										}}
										class="lg:hover:text-primary-700 mr-12 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
										><b><Icon icon="mdi:people" class="mr-2 inline text-2xl" />首頁</b></a
									>
								</li>
								<li>
									<a
										href="#a2"
										on:click|preventDefault={function handleScrollToa2() {
											scrollTo({ y: document.querySelector('#a2').offsetTop, duration: 1000 });
										}}
										class=" lg:hover:text-primary-700 mr-12 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
										><b><Icon icon="mdi:file" class="mr-2 inline text-2xl" />關於我</b></a
									>
								</li>
								<li>
									<a
										href="#a3"
										on:click|preventDefault={function handleScrollToa2() {
											scrollTo({ y: document.querySelector('#a3').offsetTop, duration: 1000 });
										}}
										class="lg:hover:text-primary-700 mr-12 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
										><b><Icon icon="mdi:camera" class="mr-2 inline text-2xl" /> 大學</b></a
									>
								</li>
								<li>
									<a
										href="#4"
										on:click|preventDefault={function handleScrollToa2() {
											scrollTo({ y: document.querySelector('#a4').offsetTop, duration: 1000 });
										}}
										class="lg:hover:text-primary-700 mr-12 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
										><b><Icon icon="material-symbols:pending" class="mr-2 inline text-2xl" />結語</b
										></a
									>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</div>

		<!------>
		<section class="w-screen h-screen" id="a1">
			<div
				class="mx-auto  grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0"
			>
				<div class=" place-self-center lg:col-span-7">
					<h1
						class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl"
					>
						{hello}
					</h1>
					<p
						class="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl"
					>
						<b> {welcomeText}</b>
					</p>
					<Button>
						<a
							href="#a2"
							on:click|preventDefault={function handleScrollToa2() {
								scrollTo({ y: document.querySelector('#a2').offsetTop, duration: 1000 });
							}}
						>
							Get started
						</a>
					</Button>
				</div>
				<div class="flex hidden ml-16 h-full overflow-x-auto lg:col-span-5 lg:mt-0 lg:flex" id="slider">
					{#if visible}
						<img
							transition:fade={{ y: 200, duration: 2000 }}
							class="rounded-lg"
							src="{a4Image}"
							alt="mockup"
							width="350"
							height="250"
						/>
					{/if}
				</div>
			</div>
		</section>

		<section class="h-screen w-screen border border-2 bg-white dark:bg-gray-900" id="a2">
			<div class="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 ">
				<div class="mb-8 max-w-screen-md lg:mb-8">
					<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
						關於我 <Icon icon="mdi:file" class="mr-2 inline text-4xl" />
					</h2>
				</div>
				<div class="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
					<div
						class="h-56 p-12 rounded-lg bg-gradient-to-r from-sky-100 to-blue-300  pt-12 hover:from-sky-300 hover:to-blue-500 hover:text-white "
					>
						<h3 class="mb-2 text-xl font-bold dark:text-white">基本資料</h3>
						<p class="">姓名:許朝威 Chao-Wei Hsu</p>
						<p class="">國籍:台灣</p>
						<p class="">生日:2003/02/15</p>
					</div>
					<div
						class="h-56 p-12  rounded-lg   bg-gradient-to-r from-sky-100 to-blue-300  pt-12 hover:from-sky-300 hover:to-blue-500 hover:text-white"
					>
						<h3 class=" mb-2 text-xl font-bold dark:text-white">聯絡方式</h3>

						<p class="">手機:0966-550-373</p>
						<p class="">信箱:asdfg32390299@gmail.com</p>
					</div>
					<div
						class="h-56 p-12 rounded-lg   bg-gradient-to-r from-sky-100 to-blue-300  pt-12 hover:from-sky-300 hover:to-blue-500 hover:text-white"
					>
						<h3 class="mb-2 text-xl font-bold dark:text-white">學歷</h3>
						<b>國立台北護理健康大學 資訊管理系</b>
						<p class="">2021/09-迄今 學士二年級</p>
						<b>國立土庫商工 資料處理科</b>
						<p class="">2018/09-2021-06 高中</p>
					</div>
				</div>
				<!-- <Progressbar progress="50" labelOutside="我目前是北護二年級生，我的大學生活已經過了一半了" /> -->

				<div class="mt-8">
					<h3 class="mb-2 text-xl font-bold dark:text-white">網頁程式語言</h3>
					<nav class="flex  ">
						<div class="item-center  m-4 w-1/2 text-center">
							<button
								class="rounded-lg border border-4 p-2 hover:bg-gray-100"
								on:click={function handleClick2() {
									if (OpenSvelteKit != true) {
										OpenSvelteKit = true;
									} else {
										OpenSvelteKit = false;
									}
								}}
								><Icon icon="logos:svelte-icon" class="mr-2 inline text-xl" />
								SvelteKit</button
							>
						</div>
						<Modal title="SvelteKit" message="SvelteKit" bind:open={OpenSvelteKit}>
							<div class="h-60 w-60  rounded-lg  p-6   ">
								<h3 class="mb-2 text-xl font-bold dark:text-white">SvelteKit</h3>
							</div>
						</Modal>
						<div class="item-center  m-4 w-1/2 text-center">
							<button
								class="rounded-lg border border-4 p-2 hover:bg-gray-100"
								on:click={function handleClick2() {
									if (OpenTailwindCSS != true) {
										OpenTailwindCSS = true;
									} else {
										OpenTailwindCSS = false;
									}
								}}
								><Icon
									icon="skill-icons:tailwindcss-light"
									class="mr-2 inline text-xl"
								/>TailwindCSS</button
							>
						</div>
						<Modal title="TailwindCSS" message="TailwindCSS" bind:open={OpenTailwindCSS}>
							<div class="h-60 w-60  rounded-lg  p-6   ">
								<h3 class="mb-2 text-xl font-bold dark:text-white">TailwindCSS</h3>
							</div>
						</Modal>
						<div class="item-center  m-4 w-1/2 text-center">
							<button
								class="rounded-lg border border-4 p-2 hover:bg-gray-100"
								on:click={function handleClick2() {
									if (OpenJavaScript != true) {
										OpenJavaScript = true;
									} else {
										OpenJavaScript = false;
									}
								}}
								><Icon
									icon="skill-icons:javascript"
									class="mr-2 inline text-xl"
								/>JavaScript</button
							>
						</div>
						<Modal title="JavaScript" message="JavaScript" bind:open={OpenJavaScript}>
							<div class="h-60 w-60  rounded-lg  p-6   ">
								<h3 class="mb-2 text-xl font-bold dark:text-white">JavaScript</h3>
							</div>
						</Modal>

						<div class="item-center  m-4 w-1/2 text-center">
							<button
								class="rounded-lg border border-4 p-2 hover:bg-gray-100"
								on:click={function handleClick2() {
									if (OpenHTML != true) {
										OpenHTML = true;
									} else {
										OpenHTML = false;
									}
								}}><Icon icon="skill-icons:html" class="mr-2 inline text-xl" />HTML</button
							>
						</div>
						<Modal title="HTML" message="HTML" bind:open={OpenHTML}>
							<div class="h-60 w-60  rounded-lg  p-6   ">
								<h3 class="mb-2 text-xl font-bold dark:text-white">HTML</h3>
							</div>
						</Modal>
					</nav>
				</div>
				<div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">軟體程式語言</h3>
					<nav class="flex ">
						<div class="item-center m-4 w-1/2 text-center">
							<button
								class="rounded-lg border border-4 p-2 hover:bg-gray-100"
								on:click={function handleClick2() {
									if (OpenJava != true) {
										OpenJava = true;
									} else {
										OpenJava = false;
									}
								}}><Icon icon="logos:java" class="mr-2 inline text-xl" />Java</button
							>
						</div>
						<Modal title="Java" message="Java" bind:open={OpenJava}>
							<div class="h-60 w-60  rounded-lg  p-6   ">
								<h3 class="mb-2 text-xl font-bold dark:text-white">Java</h3>
							</div>
						</Modal>
						<div class="item-center  m-4 w-1/2 text-center">
							<button
								class="rounded-lg border border-4 p-2 hover:bg-gray-100"
								on:click={function handleClick2() {
									if (OpenC != true) {
										OpenC = true;
									} else {
										OpenC = false;
									}
								}}
								><Icon icon="logos:c" class="mr-2 inline text-xl" />
								C</button
							>
						</div>
						<Modal title="C" message="C" bind:open={OpenC}>
							<div class="h-60 w-60  rounded-lg  p-6   ">
								<h3 class="mb-2 text-xl font-bold dark:text-white">C</h3>
							</div>
						</Modal>
						<div class="item-center  m-4 w-1/2 text-center">
							<button
								class="rounded-lg border border-4 p-2 hover:bg-gray-100"
								on:click={function handleClick2() {
									if (OpenCplus != true) {
										OpenCplus = true;
									} else {
										OpenCplus = false;
									}
								}}
							>
								<Icon icon="logos:c-plusplus" class="mr-2 inline text-xl" />C++</button
							>
						</div>
						<Modal title="C++" message="C++" bind:open={OpenCplus}>
							<div class="h-60 w-60  rounded-lg  p-6   ">
								<h3 class="mb-2 text-xl font-bold dark:text-white">C</h3>
							</div>
						</Modal>
						<div class="item-center  m-4 w-1/2 text-center">
							<button
								class="rounded-lg border border-4 p-2 hover:bg-gray-100"
								on:click={function handleClick2() {
									if (OpenPython != true) {
										OpenPython = true;
									} else {
										OpenPython = false;
									}
								}}><Icon icon="logos:python" class="mr-2 inline text-xl" />Python</button
							>
						</div>
						<Modal title="Python" message="Python" bind:open={OpenPython}>
							<div class="h-60 w-60  rounded-lg  p-6   ">
								<h3 class="mb-2 text-xl font-bold dark:text-white">Python</h3>
							</div>
						</Modal>
					</nav>
				</div>
			</div>
		</section>

		<section class="h-screen border border-2 bg-white dark:bg-gray-900" id="a3">
			<div class=" p-12 m-32">
				
				<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
					大學 <Icon icon="mdi:camera" class="mr-2 inline text-4xl" />
					<img
										
										class="float-right rounded-lg"
										src="/src/routes/images/logo.jpg"
										alt="mockup"
										width="160"
										height="160"
									/>
				</h2>
				
				<nav class="p-4">
					<Button on:click={open_all}>Open all</Button>
					<Button on:click={close_all}>Close all</Button>
				</nav>

				<Accordion multiple class="mt-10">
					<AccordionItem bind:open={items[0]}>
						<span slot="header"><b>認識了很多朋友</b></span>
						<nav>
							<p class="mb-2 text-gray-500 dark:text-gray-400">
								我在上大學後，認識了許多的人，跟他們到處玩、到處吃喝成為了我不斷向前的動力。
							</p>

							{#if visible}
								<nav class="flex">
									<img
										transition:fade={{ y: 200, duration: 2000 }}
										class="float-right m-8 rounded-lg"
										src="/src/routes/images/h1.jpg"
										alt="mockup"
										width="350"
										height="250"
									/>
									<img
										transition:fade={{ y: 200, duration: 2000 }}
										class="float-right m-8 rounded-lg"
										src="/src/routes/images/h4.jpg"
										alt="mockup"
										width="350"
										height="250"
									/>
									<img
										transition:fade={{ y: 200, duration: 2000 }}
										class="float-right m-8 rounded-lg"
										src="/src/routes/images/h3.jpg"
										alt="mockup"
										width="350"
										height="250"
									/>
								</nav>
							{/if}
						</nav>
					</AccordionItem>
					<AccordionItem bind:open={items[1]}>
						<div slot="header"><b>主題二</b></div>
						<p class="mb-2 text-gray-500 dark:text-gray-400">...</p>
						<p class="mb-2 text-gray-500 dark:text-gray-400">...</p>
						<p class="mb-2 text-gray-500 dark:text-gray-400">...</p>
					</AccordionItem>
					<AccordionItem bind:open={items[2]}>
						<div slot="header"><b>主題三</b></div>
						<p>...</p>
					</AccordionItem>
					<AccordionItem bind:open={items[3]}>
						<div slot="header"><b>主題四</b></div>
						<p>...</p>
					</AccordionItem>
					<AccordionItem bind:open={items[4]}>
						<div slot="header"><b>主題五</b></div>
						<p>...</p>
					</AccordionItem>
					
				</Accordion>
			</div>
		</section>
	</div>
	<SpeedDial defaultClass="mr-10 absolute text-right bottom-6 sticky  ">
		<SpeedDialButton name="首頁">
			<a
				href="#a0"
				on:click|preventDefault={function handleScrollToa2() {
					scrollTo({ y: document.querySelector('#a0').offsetTop, duration: 1000 });
				}}
				class=" lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
				><Icon icon="mdi:people" class=" inline text-2xl" />
			</a></SpeedDialButton
		>
		<SpeedDialButton name="關於">
			<a
				href="#a2"
				on:click|preventDefault={function handleScrollToa2() {
					scrollTo({ y: document.querySelector('#a2').offsetTop, duration: 1000 });
				}}
				class=" lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
				><Icon icon="mdi:file" class="inline text-2xl" />
			</a></SpeedDialButton
		>
		<SpeedDialButton name="大學">
			<a
				href="#a3"
				on:click|preventDefault={function handleScrollToa2() {
					scrollTo({ y: document.querySelector('#a3').offsetTop, duration: 1000 });
				}}
				class=" lg:hover:text-primary-700 lock border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
				><Icon icon="mdi:camera" class=" inline text-2xl" />
			</a></SpeedDialButton
		>
		<SpeedDialButton name="結語">
			<a
				href="#a4"
				on:click|preventDefault={function handleScrollToa2() {
					scrollTo({ y: document.querySelector('#a4').offsetTop, duration: 1000 });
				}}
				class=" lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
				><Icon icon="material-symbols:pending" class=" inline text-2xl" />
			</a></SpeedDialButton
		>
	</SpeedDial>
</body>

<div>
	<Footer footerType="logo">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div class="flex items-center  text-center">
				<img
					src="src\routes\images\logo.png"
					witch="60"
					height="60"
					class="mr-3 h-6 sm:h-9"
					alt="Flowbite Logo"
				/>
				<p class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Wayne's Web
				</p>
			</div>
			<FooterLinkGroup
				ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
			>
				<FooterLink href="https://github.com/WayneHsu0215"
					><Icon icon="icon-park:github" class="mr-2 inline text-xl" />Github</FooterLink
				>
				<FooterLink href="/"
					><Icon icon="mdi:instagram" class="mr-2 inline text-xl" />Instagram</FooterLink
				>
				<FooterLink href="/"
					><Icon icon="ic:baseline-facebook" class="mr-2 inline text-xl" />Facebook</FooterLink
				>
			</FooterLinkGroup>
			<FooterCopyright href="/" by="Wayne" />
		</div>
	</Footer>
</div>

<style>
	

	@keyframes appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
