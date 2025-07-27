// Tooltip mouse follow
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.item').forEach(function (itemElem) {
        itemElem.addEventListener('mousemove', function (e) {
            var tooltip = this.querySelector('.tooltiptext');
            if (!tooltip) return; // Skip if there's no tooltip in this item

            // Get the bounding rectangle of the parent element
            var rect = itemElem.getBoundingClientRect();

            // Calculate tooltip position relative to the parent element
            var tooltipX = e.clientX - rect.left; // Position relative to the parent
            var tooltipY = e.clientY - rect.top;  // Position relative to the parent

            var offsetX = 10; // Offset to prevent overlap with cursor
            var offsetY = 10;

            tooltip.style.left = (tooltipX + offsetX) + 'px';
            tooltip.style.top = (tooltipY + offsetY) + 'px';
            tooltip.style.position = 'absolute'; // Ensure absolute positioning
            tooltip.style.visibility = 'visible';
        });

        itemElem.addEventListener('mouseleave', function () {
            var tooltip = this.querySelector('.tooltiptext');
            if (tooltip) {
                tooltip.style.visibility = 'hidden';
            }
        });
    });
});
