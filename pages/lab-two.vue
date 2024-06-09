<template>
    <section class="pt-40 lg:py-52 2xl:py-40">
        <div class="justify-between max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto pr-5">
            <div class="space-y-10">
                <div id="digit-clock">{{ digitClock }}</div>
                <canvas id="analog-clock" width="150" height="150" class="bg-[#999]"></canvas>

                <div class="space-y-5">
                    <button @click="toggleEmail"
                        class="glow w-fit relative inline-block bg-neutral-100 p-2 rounded-md z-index:1;">
                        Show/hide your email
                    </button>
                    <a v-if="isEmailVisable" href="mailto:sontakor@mail.uc.edu" class="block">
                        sontakor@mail.uc.edu
                    </a>

                    <input v-model="inputEcho" type="text" placeholder="echo value" class="block" />
                    

                    <button @click="SubmitEcho"
                        class="glow w-fit relative inline-block bg-neutral-100 p-2 rounded-md z-index:1;">
                        Submit Echo
                    </button>
                    <p>Echo: {{ copyEcho }}</p>
                </div>

            </div>

        </div>
    </section>
</template>
<script setup>
const isEmailVisable = ref(false);
const digitClock = ref('');
const inputEcho = ref('');
const copyEcho = ref('')


const SubmitEcho = () => {
    copyEcho.value = inputEcho.value
    inputEcho.value = ''
}

function displayTime() {
    digitClock.value = 'Current time: ' + new Date();
}


function toggleEmail() {
    console.log('Show/hide email');
    isEmailVisable.value = !isEmailVisable.value
}

function drawFace(ctx, radius) {
    const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (let num = 1; num < 13; num++) {
        let ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
onMounted(() => {
    var canvas = document.getElementById("analog-clock");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90
    setInterval(drawClock, 1000);

    function drawClock() {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }


    function drawTime(ctx, radius) {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();
        // Hour
        const hourPos = (hour % 12) * 360 / 12 + (minute * (360 / 60) / 12);
        drawHand(ctx, hourPos, radius * 0.5, radius * 0.07);
        // Minute
        const minutePos = (minute * 360 / 60) + (second * (360 / 60) / 60);
        drawHand(ctx, minutePos, radius * 0.8, radius * 0.07);
        // Second
        const secondPos = second * 360 / 60;
        drawHand(ctx, secondPos, radius * 0.9, radius * 0.02);
    }

    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.moveTo(0, 0);
        ctx.rotate(pos * Math.PI / 180);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos * Math.PI / 180);
    }


    setInterval(drawClock, 1000);
    setInterval(displayTime, 500);
});
</script>


<style>
/* Stylesheet 1: Source: view-source:https://www.w3schools.com/css/demo_default.htm */

.container {
    xmin-width: 900px;
}

.wrapper {
    position: relative;
    overflow: auto;
}

#top,
#sidebar,
#bottom,
.menuitem {
    border-radius: 4px;
    margin: 4px;
}

#top {
    background-color: #4CAF50;
    color: #ffffff;
    padding: 15px;
}

#menubar {
    width: 200px;
    float: left
}

#main {
    padding: 10px;
    margin: 0 210px;
}

#sidebar {
    background-color: #32a4e7;
    color: #ffffff;
    padding: 10px;
    width: 180px;
    bottom: 0;
    top: 0;
    right: 0;
    position: absolute;
}

#bottom {
    border: 1px solid #d4d4d4;
    background-color: #f1f1f1;
    text-align: center;
    padding: 10px;
    font-size: 70%;
    line-height: 14px;
}

#top h1,
#top p,
#menulist {
    margin: 0;
    padding: 0;
}

.menuitem {
    background-color: #f1f1f1;
    border: 1px solid #d4d4d4;
    list-style-type: none;
    padding: 2px;
    cursor: pointer;
}

.menuitem:hover {
    background-color: #ffffff;
}

.menuitem:first-child {
    background-color: #4CAF50;
    color: white;
    font-weight: bold;
}


@media (max-width: 800px) {
    #sidebar {
        width: auto;
        position: relative;
    }

    #main {
        margin-right: 0;
    }
}

@media (max-width: 600px) {
    #menubar {
        width: auto;
        float: none;
    }

    #main {
        margin: 0;
    }
}
</style>