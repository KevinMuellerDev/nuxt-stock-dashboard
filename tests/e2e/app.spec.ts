import { resolve, join } from 'path'
import { test, expect } from '@playwright/test'
const ids:string[] = [
    'lc',
    'dc'
]

const ROOT_PATH = resolve('tests/screenshots')


test('test title of the app', async ({ page, baseURL }) => {
    await page.goto(baseURL + '/');
    await expect(page.locator('h1').locator('text=The Magnificent Seven Companies')).toBeVisible();
});

test('test if all widgets are rendered', async ({ page, baseURL }) => {
    await page.goto(baseURL + '/');
    const widgetList = await page.locator('div#widget-list > div.widg-outer-frame').count();
    await expect(widgetList).toBeGreaterThanOrEqual(7);

})

test('test if charts are loaded', async ({ page, baseURL }) => {
    await page.goto(baseURL + '/');
    await expect(page.locator('canvas#lc')).toBeVisible();
    await expect(page.locator('canvas#dc')).toBeVisible();

    ids.map(async(element)=>{
        const isCanvasNotEmpty = await page.evaluate((element) => {
            const canvasElement = document.getElementById(element) as HTMLCanvasElement;
            if (!canvasElement)
                return false;
            const context = canvasElement.getContext('2d');
            if (!context)
                return false;
            const pixelData = context.getImageData(0, 0, canvasElement.width, canvasElement.height).data;
            return Array.from(pixelData).some(channel => channel !== 0); // true, wenn es Pixel gibt, die nicht transparent sind
        }, element);

        await expect(isCanvasNotEmpty).toBe(true);
    })

    await page.screenshot({ path: join(ROOT_PATH, 'index-page.png') });
})