// async function insertion(){
//     const ele=document.querySelectorAll('.sort');

//     ele[0].style.background='green';
//     for(let i=1; i<ele.length; i++)
//     {
//         ele[i].style.background='red';
//         let key=ele[i].style.height;
//         let j=i-1;

//         while(j>=0 && (parseInt(key)<parseInt(ele[j].style.height)))
//         {
//             ele[j].style.background='red';
//             ele[j+1].style.height=ele[j].style.height;
//             j--;
            
//             await delay(time);
//             for(let k=0; k<i; k++)
//             {
//                 ele[k].style.background='green';
//             }
//         }

//         ele[j+1].style.height=key;
//         ele[i].style.background='green';
//     }
// }

// document.getElementById('insertion').addEventListener('click',async function(){
//     disableSizeSlider();
//     disableSortingBtn();
//     await insertion();
//     enableSizeSlider();
//     enableSortingBtn();
// });

async function insertion() {
    const ele = document.querySelectorAll('.sort');

    ele[0].style.background = 'green';
    for (let i = 1; i < ele.length; i++) {
        ele[i].style.background = 'red';
        let key = ele[i].style.height;
        let j = i - 1;

        while (j >= 0 && parseInt(key) < parseInt(ele[j].style.height)) {
            ele[j].style.background = 'red';
            ele[j + 1].style.height = ele[j].style.height;

            // Update displayed values after each swap inside the while loop
            const value = ele[j + 1].querySelector('.bar-value');
            value.textContent = parseInt(ele[j + 1].style.height);

            j--;

            await delay(time);
            for (let k = 0; k <= i; k++) { // Update all bars till the current position i
                ele[k].style.background = 'green';
            }
        }

        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';

        // Update displayed values after insertion
        ele.forEach((bar, index) => {
            const value = bar.querySelector('.bar-value');
            value.textContent = parseInt(bar.style.height); // Update value with height of the bar
        });

        await delay(time);
    }
}

document.getElementById('insertion').addEventListener('click', async function () {
    disableSizeSlider();
    disableSortingBtn();
    await insertion();
    enableSizeSlider();
    enableSortingBtn();
});
