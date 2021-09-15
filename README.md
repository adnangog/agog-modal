# Agog Content Slider

## Demo

[https://agogmodal.netlify.app/](https://agogmodal.netlify.app/)

## Options

| Option | Default Value | Description  |
|--|--|--|
| **selector** | [data-agog-modal] | main selector to run the plugin |
| **modalClass** | modal | container element css class |
| **closeClass** | modal-close | close button css class |
| **modalType** | 1 | a value from 1 to 5 for modal display type (1,2,3,4,5) |
| **callbackBefore** | function() {} | function to run before plugin runs |
| **callbackAfter** | function() {} | function to run after plugin runs |

## Data Options

| Option | Description  |
|--|--|
| **data-modal-target** | target element id for modal content |
| **data-modal-type** | a value from 1 to 5 for modal display type (1,2,3,4,5) |

## Example

    <button data-modal-target="modal1" data-modal-type="1">Show Modal</button>
    
    <div class="modal" id="modal1">
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quod. Laborum aliquam suscipit itaque corporis.</p>
        <p>Soluta ipsum inventore aspernatur nostrum qui laudantium necessitatibus cupiditate reprehenderit possimus vitae eveniet aperiam, ex, laborum deleniti modi nesciunt iure voluptas! Enim omnis maxime temporibus?</p>
        <p>Excepturi aperiam quam ducimus cum reiciendis possimus, deserunt mollitia ea similique nisi eveniet repellat impedit.</p>
      </div>
    </div>
    <script>
    agogModal.init();
    </script>

