<script>
    import pic from "/pic.jpg";
</script>

<main>
    <img src={pic} alt="profile_picture" style="width: 150px; height: 150px;" />
    <hgroup style="margin-top: 40px;">
        <h2>
            I’m <span style="color: var(--pico-primary)">Manohar Maharshi</span>
        </h2>
        <p>
            <small>
                Assistant Professor with a soft spot for the web — I teach,
                experiment, and dive into whatever’s new and interesting in the
                online space.
            </small>
        </p>
    </hgroup>
    <a href="https://x.com/mmmmaharshi" target="_blank">X</a>
    <a href="https://github.com/mmmmaharshi" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/manohar-maharshi/" target="_blank"
        >LinkedIn</a
    >
</main>

<style>
    main {
        width: 50%;
        height: 100svh;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }
</style>
