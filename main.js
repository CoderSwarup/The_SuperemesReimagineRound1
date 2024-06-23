const DefaultSetter = () => {
  gsap.set("#nav nav .info", { y: -100 });
  gsap.set("#nav nav .logo", { y: -100 });
  gsap.set("#nav nav .toggle-btn", { y: -100 });
};
function PreLoader() {
  const PreLoaderConatiner = document.querySelector("#preLoader");
  const LoaderContent = document.querySelector(".l-loader");
  const bacgroundLoaderScreen = document.querySelector(".l-red-backgrond");
  //   const textContent = document.querySelectorAll(".l-text-content");
  const textContentHeadingTop = gsap.utils.toArray(".l-text-content.top h1");
  const textContentHeadingBottom = gsap.utils.toArray(
    ".l-text-content.bottom h1"
  );
  const textContentContainer = document.querySelectorAll(".l-text-content");
  const lines = document.querySelectorAll(".l-line");
  const tl = gsap.timeline();
  tl.from(lines, {
    width: 0,
    stagger: 0.3,
    duration: 1,
  }).fromTo(
    textContentContainer,
    { height: "0px", duration: 1, ease: "power4.out" },
    {
      height: "150px",
      duration: 1,
    }
  );
  const headings = [
    { id: 1, startY: 0, endY: -100 },
    { id: 2, startY: -100, endY: -200 },
    { id: 3, startY: -200, endY: -300 },
    { id: 4, startY: -300, endY: -300 }, // Adjusted to match your last sequence
  ];

  // Iterate over each heading data
  headings.forEach(({ id, startY, endY }) => {
    // Define labels based on the current heading id
    const label = `h${id}`;
    const fadeLabel = `h${id}-fade`;

    // Animation for top and bottom elements of current heading
    tl.to(`#l-t-${id}`, { y: `${startY}%`, duration: 0.5 }, label)
      .to(`#l-b-${id}`, { y: `${startY}%`, duration: 0.5 }, label)
      .to(`#l-t-${id}`, { y: `${endY}%`, duration: 0.5 }, fadeLabel)
      .to(`#l-b-${id}`, { y: `${endY}%`, duration: 0.5 }, fadeLabel);
  });

  // tl.to(textContentContainer, {
  //   height: "0px",
  //   delay: 0.3,
  //   duration: 1,
  //   ease: "power4.out",
  // })
  //   .to(lines, {
  //     width: 0,
  //     stagger: 0.3,
  //     duration: 1,
  //   })
  tl.to(
    LoaderContent,
    {
      y: "-100%",
      duration: 1,
      ease: "power4.out",
    },
    "a"
  )
    .to(
      bacgroundLoaderScreen,
      {
        delay: 0.1,
        y: "-100%",
        duration: 1,
        ease: "power4.out",
      },
      "a"
    )
    .to(
      PreLoaderConatiner,
      {
        delay: 0.3,
        y: "-100%",
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
          NavbarAnimation();
        },
      },
      "a"
    )
    .add(() => {
      locoScroll.init();
      console.log(locoScroll);
    });
}

window.onload = () => {
  PreLoader();
};

DefaultSetter();
//Navbar Animation
function NavbarAnimation() {
  const tl = gsap.timeline();
  tl.to("#nav nav .info", {
    y: 0,
    duration: 1,
    ease: "elastic.out",
  })
    .to("#nav nav .logo", {
      y: 0,
      duration: 0.51,
      ease: "elastic.out",
    })
    .to("#nav nav .toggle-btn", {
      y: 0,
      duration: 0.51,
      ease: "elastic.out",
    });
}
