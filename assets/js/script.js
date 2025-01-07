// 简单的 JavaScript 示例，这里暂时不处理任何逻辑
document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log(`查看${item.textContent}的详细信息`);
        });
    });
});
